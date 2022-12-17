import { InstructorI } from "./instructor.interface";

interface CourseFeaturesI {
  new: boolean;
  top: boolean;
  popular: boolean;
}

export interface CourseInfoI {
  Title: string;
  Instructor: InstructorI;
  Thumb:string;
  plot: string;
  Rating: number;
  Tags: string[];
  StudentsNo: number;
  CreatedData: string;
  UpdateData: string;
  features:CourseFeaturesI;
}

