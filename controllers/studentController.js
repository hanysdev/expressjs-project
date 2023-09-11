const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

const Student = require('../models/student');

router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  const studentId = req.params.id;
  try {
    const student = await Student.findByPk(studentId);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  const newStudentData = req.body;
  try {
    const student = await Student.create(newStudentData);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
});

router.put('/:id', async (req, res) => {
  const studentId = req.params.id;
  const updatedStudentData = req.body;
  try {
    const student = await Student.findByPk(studentId);
    if (student) {
      await student.update(updatedStudentData);
      res.status(200).json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
});

router.delete('/:id', async (req, res) => {
  const studentId = req.params.id;
  try {
    const student = await Student.findByPk(studentId);
    if (student) {
      await student.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
