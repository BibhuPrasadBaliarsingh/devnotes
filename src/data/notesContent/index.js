import htmlContent from './html';
import cssContent from './css';
import javascriptContent from './javascript';
import reactContent from './react';
import nodejsContent from './nodejs';
import expressContent from './express';
import pythonContent from './python';
import sqlContent from './sql';
import mongodbContent from './mongodb';
import sdlcContent from './sdlc';
import softwareTestingContent from './software-testing';
import hrInterviewContent from './hr-interview-questions';

const contentMap = {
  html: htmlContent,
  css: cssContent,
  javascript: javascriptContent,
  react: reactContent,
  nodejs: nodejsContent,
  express: expressContent,
  python: pythonContent,
  sql: sqlContent,
  mongodb: mongodbContent,
  sdlc: sdlcContent,
  'software-testing': softwareTestingContent,
  'hr-interview-questions': hrInterviewContent,
};

export function getNoteContentBySlug(slug) {
  return contentMap[slug] || null;
}
