import axios from 'axios';
import { instance } from './instance';

// 회원가입 함수
export const UserSignUp = async (userData) => {
  try {
    const response = await instance.post('/user/signup', userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

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

// 내 프로젝트 진행도 조회
export const getMyProjectProgress = async ({ projectId, progressId }) => {
  try {
    const response = await instance.get(
      `/project/${projectId}/progress/${progressId}`
    );
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

// 산출물 제출하기
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

// 내 프로젝트 진행중 조회
export const getMyProjectInProgress = async () => {
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

// 내 프로젝트 완료 조회
export const getMyProjectCompleted = async () => {
  try {
    const response = await instance.get('/my-projects/completion');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 내 프로젝트 거절 조회
export const getMyProjectRejected = async () => {
  try {
    const response = await instance.get('/my-projects/rejection');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 내 프로젝트 중단 조회
export const getMyProjectStoped = async () => {
  try {
    const response = await instance.get('/my-projects/stop');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
