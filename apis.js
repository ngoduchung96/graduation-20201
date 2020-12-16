const { Users, Wastebaskets } = require("./dataModels");
const express = require('express');

const login = async (req, res, next) => {
  try {
    const data = await Users.find({ ...req.body });
    if (data) {
      res.status(200);
      res.json({ data });
    } else {
      res.status(400);
      res.json({
        ok: false,
        message: "invalid signing in",
      });
    }
  } catch (error) {
    res.status(400);
    res.json({
      ok: false,
      message: error.message,
    });
  }
};

const addNewUser = async (req, res, next) => {
  try {
    const data = await Users.create(req.body);
    if (data) {
      res.status(200);
      res.json({ data });
    } else {
      res.status(400);
      res.json({
        ok: false,
        message: "something wrong in creating",
      });
    }
  } catch (error) {
    res.status(400);
    res.json({
      ok: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const data = await Users.deleteOne(req.body);
    if (data) {
      res.status(200);
      res.json({ data });
    } else {
      res.status(400);
      res.json({
        ok: false,
        message: "something wrong in deleting",
      });
    }
  } catch (error) {
    res.status(400);
    res.json({
      ok: false,
      message: error.message,
    });
  }
};

const findAllUsers = async (req, res, next) => {
  try {
    const data = await Users.find();
    if (data) {
      res.status(200);
      res.json({ data });
    } else {
      res.status(400);
      res.json({
        ok: false,
        message: "something wrong in finding",
      });
    }
  } catch (error) {
    res.status(400);
    res.json({
      ok: false,
      message: error.message,
    });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const data = await Users.findByIdAndUpdate(req.body.id, {
      ...req.body,
    });
    if (data) {
      res.status(200);
      res.json({ data });
    } else {
      res.status(400);
      res.json({
        ok: false,
        message: "something wrong in updating",
      });
    }
  } catch (error) {
    res.status(400);
    res.json({
      ok: false,
      message: error.message,
    });
  }
};

module.exports = { login, addNewUser, deleteUser, findAllUsers, updateUser };
