import axios from 'axios';
import { instance } from './instance';

// 전체 프로젝트 조회
export const getAllProjects = async ({ offset, id }) => {
  try {
    const response = await instance.get(
      `/projects?offset=${offset}&status=${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 프로젝트 상세페이지 조회
export const getProjectDetail = async (projectId) => {
  try {
    const response = await instance.get(`/project/${projectId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 내 프로젝트 조회
export const getMyProject = async () => {
  try {
    const response = await instance.get('/my-projects');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postMyProjectDocument = async (
  projectId,
  progressId,
  document
) => {
  try {
    const response = await instance.post(
      `/projects/${projectId}/progress/${progressId}/doc`,
      { document },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 내 프로젝트 진행도 조회
export const getMyProjectProgress = async () => {
  try {
    const response = await instance.get('/my-projects/in-progress');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 내 프로젝트 심사중 조회
export const getMyProjectPending = async () => {
  try {
    const response = await instance.get('/my-projects/under-review');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
