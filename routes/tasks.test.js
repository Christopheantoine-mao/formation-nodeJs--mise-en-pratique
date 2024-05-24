import request from 'supertest';
import { jest } from '@jest/globals';
import app from '../app.js'; // Assurez-vous que le chemin est correct
import Task from '../models/task'; // Assurez-vous que le chemin est correct

describe('User API', () => {
  beforeAll(async () => {
	  // Connect to BDD ?
  });

  afterEach(async () => {
		// Remove data created in BDD ?
  });

  it('GET /tasks - should return all tasks', async () => {
    const response = await request(app).get('/tasks');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('POST /tasks - should create a new task', async () => {
    const newTask = { title: 'Apprendre Node.js'};
    const response = await request(app).post('/tasks').send(newTask);
    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Apprendre Node.js');
  });
});