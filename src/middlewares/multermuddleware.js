import express from 'express';
import multer from 'multer';

export const upload = multer({dest: 'uploads/'})