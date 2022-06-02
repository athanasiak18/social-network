const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtByID,
    createThought,
    updateThought,
    deleteThought,
    postReaction,
    deleteReaction

} = require('../../controllers/thoughts-ctrl');
