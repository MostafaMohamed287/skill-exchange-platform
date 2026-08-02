const mongoose = require("mongoose");
const Review = require("../models/review.model");


//Create
exports.createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);

    res.status(201).json({
      message: "Review created successfully",
      review,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};


//get all reviews
exports.getReviews = async (req, res) => {
  try {

    const reviews = await Review.find()
      .populate("reviewer", "name email")
      .populate("reviewee", "name email")
      .populate("skill", "title");

    res.status(200).json(reviews);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};


//get ID
exports.getReviewById = async (req, res) => {

  try {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid Review ID",
      });
    }

    const review = await Review.findById(id)
      .populate("reviewer", "name email")
      .populate("reviewee", "name email")
      .populate("skill", "title");

    if (!review) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.status(200).json(review);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};


//update 
exports.updateReview = async (req, res) => {

  try {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid Review ID",
      });
    }

    const review = await Review.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!review) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.status(200).json({
      message: "Review updated successfully",
      review,
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};
//delete
exports.deleteReview = async (req, res) => {

  try {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid Review ID",
      });
    }

    const review = await Review.findByIdAndDelete(id);

    if (!review) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.status(200).json({
      message: "Review deleted successfully",
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};