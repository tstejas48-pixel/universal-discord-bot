"use client";

import { useState, useEffect } from "react";
import { Star, Send, MessageSquare } from "lucide-react";

interface Feedback {
  id: number;
  name: string;
  message: string;
  rating: number;
  createdAt: string;
}

function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange?: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  const display = hovered || value;

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange?.(star)}
          onMouseEnter={() => onChange && setHovered(star)}
          onMouseLeave={() => onChange && setHovered(0)}
          className={`transition-colors ${
            star <= display ? "text-yellow-400" : "text-gray-600"
          } ${onChange ? "hover:text-yellow-300 cursor-pointer" : "cursor-default"}`}
        >
          <Star size={20} fill={star <= display ? "currentColor" : "none"} />
        </button>
      ))}
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "", rating: 5 });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const loadFeedbacks = () => {
    fetch("/api/feedback")
      .then((r) => r.json())
      .then((data) => setFeedbacks(data.feedback || []))
      .catch(() => {});
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }

      setSubmitted(true);
      setForm({ name: "", email: "", message: "", rating: 5 });
      loadFeedbacks();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="feedback" className="py-24 bg-[#080812]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            Community
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Share Your Feedback
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tried TejasBot? Let us know what you think and help make it better!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MessageSquare size={20} className="text-purple-400" />
              Leave a Review
            </h3>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h4 className="text-xl font-bold text-white mb-2">Thank you!</h4>
                <p className="text-gray-400 mb-6">Your feedback has been submitted.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3 bg-red-900/30 border border-red-500/30 rounded-lg text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Rating</label>
                  <StarRating value={form.rating} onChange={(r) => setForm({ ...form, rating: r })} />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you think about TejasBot..."
                    className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Feedback
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Recent reviews */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Recent Reviews</h3>
            {feedbacks.length === 0 ? (
              <div className="glass-card rounded-xl p-8 text-center">
                <span className="text-5xl mb-3 block">💬</span>
                <p className="text-gray-500">No reviews yet. Be the first!</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                {feedbacks.map((fb) => (
                  <div key={fb.id} className="glass-card rounded-xl p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-white font-semibold text-sm">{fb.name}</span>
                        <StarRating value={fb.rating} />
                      </div>
                      <span className="text-xs text-gray-600">
                        {new Date(fb.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{fb.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
