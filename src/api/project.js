import axios from 'axios';
import { instance } from './instance';

// 회원가입 함수
export const UserSignUp = async (userData) => {
  try {
    const response = await instance.post('/user/signup', userData);
    const ACCESS_KEY = response.headers.get('ACCESS_KEY');

    if (ACCESS_KEY) {
      // 엑세스 키가 있으면 로컬 스토리지에 저장하고, true 반환
      localStorage.setItem('ACCESS_KEY', JSON.stringify(ACCESS_KEY));
      return { success: true };
    } else {
      // 엑세스 키가 없으면 false 반환
      return {
        success: false,
        message: '회원가입 실패. 엑세스 키가 없습니다.',
      };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

// 로그인 함수
export const userLogin = async (access_key) => {
  // Axios 인스턴스를 사용하여 로그인 요청 전송
  // Request 헤더에 access_key 포함
  const response = await instance.post(
    '/user/login',
    {}, // 두 번째 인자로 빈 요청 본문
    {
      headers: {
        ACCESS_KEY: access_key, // 헤더는 이곳에
      },
    }
  );
  // 응답 처리
  console.log(response.data);
};

// 전체 프로젝트 조회
export const getAllProjects = async ({ offset, id }) => {
  try {
    const response = await instance.get(
      `/projects?offset=${offset}&status=${id}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 프로젝트 등록
export const ProjectCreation = async (data, access_key) => {
  const response = await instance.post('/project', data, {
    headers: {
      ACCESS_KEY: access_key, // 헤더는 이곳에
    },
  });
  console.log(response.data);
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
