import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, addReview, deleteReview } from '../redux/slice/reviewSlice';
import { toast } from 'react-toastify';

const ProductReviews = ({ productId }) => {
  const dispatch = useDispatch();
  const { reviews, loading, error } = useSelector((state) => state.reviews);
  const { user } = useSelector((state) => state.auth);
  const [animatedBreakdown, setAnimatedBreakdown] = useState([]);

  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: '',
  });
// Calculate average rating and rating breakdown
const ratingStats = {
    total: reviews.length,
    average: reviews.length
      ? (
          reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        ).toFixed(1)
      : 0,
    breakdown: [5, 4, 3, 2, 1].map((star) => ({
      star,
      count: reviews.filter((r) => r.rating === star).length,
    })),
  };
  useEffect(() => {
    if (reviews.length === 0) return;
  
    const total = reviews.length;
    const breakdown = [5, 4, 3, 2, 1].map((star) => ({
      star,
      target: (reviews.filter((r) => r.rating === star).length / total) * 100,
      current: 0,
    }));
  
    let frame = 0;
    const interval = setInterval(() => {
      frame += 1;
      const updated = breakdown.map((b) => ({
        ...b,
        current: Math.min(b.target, b.current + 1), // Increase by 2% per frame
      }));
      setAnimatedBreakdown(updated);
  
      if (updated.every((b) => b.current >= b.target)) {
        clearInterval(interval);
      }
    }, 30); // every 30ms
  
    return () => clearInterval(interval);
  }, [reviews]);
  
  // Fetch reviews when the component is mounted or the productId changes
  useEffect(() => {
    if (productId) {
      dispatch(fetchReviews(productId))
        .catch((error) => console.error('Error fetching reviews:', error));
    }
  }, [dispatch, productId]);

  // Handle form input changes
  const handleInputChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  // Handle adding a new review
  const handleAddReview = () => {
    if (!newReview.comment.trim()) {
      return toast.error('Please enter a comment.');
    }
  
    const reviewData = {
        productId,
        rating: Number(newReview.rating),
        comment: newReview.comment,
      };
  
    dispatch(addReview(reviewData))
      .unwrap()
      .then(() => {
        toast.success('Review submitted!');
        setNewReview({ rating: 5, comment: '' }); // Clear the form
      })
      .catch((error) => toast.error(error.message || 'Failed to submit review.'));
  };
  
  

  // Handle deleting a review
  const handleDeleteReview = (reviewId) => {
    dispatch(deleteReview(reviewId))
      .unwrap()
      .then(() => toast.success('Review deleted.'))
      .catch(() => toast.error('Could not delete review.'));
  };

  return (
    <div className="mt-8 border-t pt-6">
      <div className="mb-6">
  <h3 className="text-2xl font-bold">Customer reviews</h3>
  <p className="text-xl mt-1 font-semibold">
    {ratingStats.average} out of 5
  </p>
  <p className="text-sm text-gray-500 mb-4">{ratingStats.total} global ratings</p>

  <div className="space-y-2">
  {animatedBreakdown.map(({ star, current }) => (
    <div key={star} className="flex items-center gap-2">
      <span className="w-12 text-sm text-blue-600">{star} star</span>
      <div className="flex-1 h-3 bg-gray-200 rounded">
        <div
          className="h-full bg-yellow-400 rounded transition-all duration-300"
          style={{ width: `${current}%` }}
        />
      </div>
      <span className="w-10 text-sm text-gray-600 text-right">
        {Math.round(current)}%
      </span>
    </div>
  ))}
</div>

</div>


      {loading ? (
        <p className="text-gray-500">Loading reviews...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review, index) => (
            <li key={review._id || index} className="border p-4 rounded-md bg-gray-50">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">{review.user?.name || 'Anonymous'}</p>
                  <p className="text-yellow-500">
                    {'★'.repeat(review.rating)}{' '}
                    <span className="text-gray-400">{'☆'.repeat(5 - review.rating)}</span>
                  </p>
                  <p className="text-gray-700 mt-1">{review.comment}</p>
                </div>
                {user && user._id === review.user?._id && (
                  <button
                    onClick={() => handleDeleteReview(review._id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {user ? (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Write a Review</h3>
          <div className="mt-2 space-y-3">
            <div>
              <label className="block mb-1 font-medium">Rating:</label>
              <select
                name="rating"
                value={newReview.rating}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 w-24"
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} Star{r > 1 && 's'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Comment:</label>
              <textarea
                name="comment"
                value={newReview.comment}
                onChange={handleInputChange}
                rows={4}
                className="w-full border px-3 py-2 rounded"
                placeholder="Write your thoughts about the product..."
              />
            </div>

            <button
              onClick={handleAddReview}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
            >
              Submit Review
            </button>
          </div>
        </div>
      ) : (
        <p className="text-sm text-gray-600 mt-4">
          <em>Please log in to write a review.</em>
        </p>
      )}
    </div>
  );
};

export default ProductReviews;
