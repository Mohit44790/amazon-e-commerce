import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generateInvoice = (order) => {
  const doc = new jsPDF();

  // --- Header Section ---
  doc.setFontSize(18);
  doc.text("Tax Invoice", 14, 20);

  doc.setFontSize(12);
  doc.text(`Order No: ${order._id}`, 14, 30);
  doc.text(`Order Date: ${new Date(order.createdAt).toLocaleString()}`, 14, 36);

  // --- Seller Info ---
  const sellerInfo = {
    name: "ABC Retail Pvt Ltd",
    pan: "ABCDE1234F",
    gst: "22ABCDE1234F1Z5",
    address: "123 Business Park, Mumbai, Maharashtra - 400001",
    state: "Maharashtra",
  };

  doc.text("Sold By:", 14, 44);
  doc.text(`${sellerInfo.name}`, 14, 50);
  doc.text(`PAN: ${sellerInfo.pan}`, 14, 56);
  doc.text(`GST: ${sellerInfo.gst}`, 14, 62);
  doc.text(`${sellerInfo.address}`, 14, 68);
  doc.text(`Place of Supply: ${sellerInfo.state}`, 14, 74);

  // --- Buyer Info ---
  const customer = order.user || {};
  const shipping = order.shippingAddress || {};
  const billing = shipping; // Assume billing is same as shipping unless separated

  doc.text("Billing Address:", 110, 44);
  doc.text(`${shipping.fullName}`, 110, 50);
  doc.text(`${shipping.addressLine}`, 110, 56);
  doc.text(`${shipping.city}, ${shipping.state}, ${shipping.pincode}`, 110, 62);
  doc.text(`Phone: ${shipping.phoneNumber}`, 110, 68);
  doc.text(`Place of Delivery: ${shipping.state}`, 110, 74);

  // --- Table: Product Details ---
  const columns = [
    "S.No.",
    "Description",
    "Unit Price",
    "Discount",
    "Qty",
    "Net Amount",
    "Tax %",
    "Tax Type",
    "Tax Amt",
  ];

  const rows = order.orderItems.map((item, index) => {
    const unitPrice = item.price || 0;
    const discount = 0; // If available, use item.discount
    const qty = item.quantity || 1;
    const net = unitPrice * qty - discount;
    const taxRate = 18; // example 18%
    const taxAmount = (net * taxRate) / 100;

    return [
      index + 1,
      `${item.product?.name || "Product"} (${item.colors?.join(", ") || "-"}/${item.sizes?.join(", ") || "-"})`,
      `₹${unitPrice.toFixed(2)}`,
      `₹${discount.toFixed(2)}`,
      qty,
      `₹${net.toFixed(2)}`,
      `${taxRate}%`,
      "GST",
      `₹${taxAmount.toFixed(2)}`,
    ];
  });

  autoTable(doc, {
    startY: 85,
    head: [columns],
    body: rows,
    theme: 'grid',
    headStyles: { fillColor: [0, 0, 0] },
    styles: { fontSize: 9 },
  });

  const finalY = doc.lastAutoTable.finalY;

  // --- Total Calculation ---
  const subtotal = order.totalAmount || 0;
  const totalTax = rows.reduce((sum, row) => sum + parseFloat(row[8].replace("₹", "")), 0);
  const netAmount = subtotal - totalTax;

  doc.setFontSize(11);
  doc.text(`Net Amount: ₹${netAmount.toFixed(2)}`, 14, finalY + 10);
  doc.text(`Total Tax: ₹${totalTax.toFixed(2)}`, 14, finalY + 16);
  doc.text(`Total Amount: ₹${subtotal.toFixed(2)}`, 14, finalY + 22);

  doc.text("Thank you for shopping with us!", 14, finalY + 32);

  // Save the PDF
  doc.save(`Invoice_${order._id}.pdf`);
};
