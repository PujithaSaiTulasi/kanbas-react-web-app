import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENT_API = `${REMOTE_SERVER}/api/enrollments`;

export const getEnrollmentsByUser = async (userID:string) => {
    const { data } = await axios.get(`${ENROLLMENT_API}/${userID}`);
    return data;
};

export const deleteEnrollment = async (courseID: string, userID: string) => {
    const response = await axios.delete(`${ENROLLMENT_API}/${courseID}/${userID}`);
    return response.data;
};

export const addEnrollment = async (courseID: string, userID: string) => {
    const { data } = await axios.post(`${ENROLLMENT_API}/${courseID}/${userID}`);
    return data;
};