import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generateInvoice = (order) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Invoice", 14, 22);

  doc.setFontSize(12);
  doc.text(`Order ID: ${order._id}`, 14, 32);
  doc.text(`Customer: ${order.user?.name || "N/A"}`, 14, 40);
  doc.text(`Email: ${order.user?.email || "N/A"}`, 14, 48);
  doc.text(`Date: ${new Date(order.createdAt).toLocaleString()}`, 14, 56);

  autoTable(doc, {
    startY: 65,
    head: [["Product", "Color", "Size", "Qty", "Price"]],
    body: order.orderItems.map((item) => [
      item.product?.name || "Product",
      item.colors || "-",
      item.sizes || "-",
      item.quantity,
      `₹${item.price}`,
    ]),
  });

  doc.text(`Total Amount: ₹${order.totalAmount}`, 14, doc.lastAutoTable.finalY + 10);

  // Save as file
  doc.save(`Invoice_${order._id}.pdf`);
};
