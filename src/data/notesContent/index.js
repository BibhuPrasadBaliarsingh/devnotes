import htmlContent from './html';
import cssContent from './css';
import javascriptContent from './javascript';
import reactContent from './react';
import nextjsContent from './nextjs';
import nodejsContent from './nodejs';
import expressContent from './express';
import pythonContent from './python';
import sqlContent from './sql';
import mongodbContent from './mongodb';
import sdlcContent from './sdlc';
import softwareTestingContent from './software-testing';
import hrInterviewContent from './hr-interview-questions';
import metaAdsContent from './meta-ads';
import backendContent from './backend';

const contentMap = {
  html: htmlContent,
  css: cssContent,
  javascript: javascriptContent,
  react: reactContent,
  nextjs: nextjsContent,
  nodejs: nodejsContent,
  express: expressContent,
  python: pythonContent,
  sql: sqlContent,
  mongodb: mongodbContent,
  sdlc: sdlcContent,
  'software-testing': softwareTestingContent,
  'hr-interview-questions': hrInterviewContent,
  'meta-ads': metaAdsContent,
  backend: backendContent,
};

export function getNoteContentBySlug(slug) {
  return contentMap[slug] || null;
}
