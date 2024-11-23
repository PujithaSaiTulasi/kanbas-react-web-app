import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;


export const enrollInCourse = async (userId: string, courseId: string) => {
    const response = await axios.post(`${ENROLLMENTS_API}/enroll`, { userId, courseId });
    return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/unenroll`, {
        params: { userId, courseId },
    });
    return response.data;
};

export const getEnrollments = async (userId: string) => {
    const response = await axios.get(`${ENROLLMENTS_API}/user/${userId}`);
    return response.data;
};
