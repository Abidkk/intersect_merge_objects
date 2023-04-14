///// -=========================================================================================
////  ==========================================================================================
/////     >>>>>>>>>>>    Step -05e (Intersection  Types) Merge Objects            <<<<<<<<<<<<<<

// ///         ::::::  Example -1 with interface    :::::::
// // obj-1
// interface student {
//   studentName:string;
//   rollNo:number;
//   city:string
// };
// // obj-2
// interface teacher {
//   teacherName:string;
// };

// // merging
// type mergedData = student & teacher;

// // assigning values ;
// let data : mergedData={
//   studentName:'Abid Ali',
//   rollNo:194948,
//   city:'Mirpurkhas',
//   teacherName:'Zia Khan'
// }
// console.log(data);




// ///             ::::::  Example -2 with interface   :::::
// //obj-1
// interface team_A {
//   team_A_score:number
// }

// //obj-2
// interface team_B {
//   team_B_score:number
// }

// // merging
// type scores = team_A & team_B;

// //assigning values
// let totalScore :scores = {
//   team_A_score:45,
//   team_B_score:15
// }
// console.log(totalScore);



// ///             ::::::  Example -3 with interface   :::::
// //obj-1
// interface student_1 {
//   s1_rollNo:number;
//   s1_name:string;
//   s1_age:number;
//   s1_city:string;
//   s1_status:boolean;
// }

//   //obj-2
// interface student_2 {
//   s2_rollNo:number;
//   s2_name:string;
//   s2_age:number;
//   s2_city:string;
//   s2_status:boolean;
// }

//   //obj-3
//   interface student_3 {
//     s3_rollNo:number;
//     s3_name:string;
//     s3_age:number;
//     s3_city:string;
//     s3_status:boolean;
//   }
  

//     //obj-4
//     interface student_4 {
//       s4_rollNo:number;
//       s4_name:string;
//       s4_age:number;
//       s4_city:string;
//       s4_status:boolean;
//     }
    
    
//     //obj-5
//     interface student_5 {
//       s5_rollNo:number;
//       s5_name:string;
//       s5_age:number;
//       s5_city:string;
//       s5_status:boolean;
//     }

//     // merging 
//     type alldata = student_1 & student_2 & student_3 & student_4 & student_5;

//     // assigning values:
//     let studentsData : alldata = {

//       s1_rollNo:45,
//       s1_name:"Abid Ali",
//       s1_age:23,
//       s1_city:"Mirpurkhas",
//       s1_status:true,

//       s2_rollNo:46,
//       s2_name:"Imran Ali",
//       s2_age:25,
//       s2_city:"Islamabad",
//       s2_status:false,

//       s3_rollNo:47,
//       s3_name:"Zahid Hussain",
//       s3_age:45,
//       s3_city:"Hyderabad",
//       s3_status:true,

//       s4_rollNo:48,
//       s4_name:"Bilal Ahmed ",
//       s4_age:28,
//       s4_city:"Karachi",
//       s4_status:false,

//       s5_rollNo:49,
//       s5_name:"Taimoor",
//       s5_age:32,
//       s5_city:"Lahore",
//       s5_status:true,

//     }

//     console.log(studentsData)






// ///         ::::::  Example -1 with type   :::::::
// // obj-1
// type  student = {
//   studentName:string;
//   rollNo:number;
//   city:string
// };
// // obj-2
// type teacher = {
//   teacherName:string;
// };

// // merging
// type mergedData = student & teacher;

// // assigning values ;
// let data : mergedData={
//   studentName:'Abid Ali',
//   rollNo:194948,
//   city:'Mirpurkhas',
//   teacherName:'Zia Khan'
// }
// console.log(data);


// ///             ::::::  Example -2 with type   :::::
// //obj-1
// type team_A = {
//   team_A_score:number
// }

// //obj-2
// type team_B = {
//   team_B_score:number
// }

// // merging
// type scores = team_A & team_B;

// //assigning values
// let totalScore :scores = {
//   team_A_score:45,
//   team_B_score:15
// }
// console.log(totalScore);



// ///             ::::::  Example -3 with type  :::::
// //obj-1
// type student_1 = {
//   s1_rollNo:number;
//   s1_name:string;
//   s1_age:number;
//   s1_city:string;
//   s1_status:boolean;
// }

//   //obj-2
// type student_2 = {
//   s2_rollNo:number;
//   s2_name:string;
//   s2_age:number;
//   s2_city:string;
//   s2_status:boolean;
// }

//   //obj-3
//   type student_3 = {
//     s3_rollNo:number;
//     s3_name:string;
//     s3_age:number;
//     s3_city:string;
//     s3_status:boolean;
//   }
  

//     //obj-4
//    type student_4 ={
//       s4_rollNo:number;
//       s4_name:string;
//       s4_age:number;
//       s4_city:string;
//       s4_status:boolean;
//     }
    
    
//     //obj-5
//     type student_5 = {
//       s5_rollNo:number;
//       s5_name:string;
//       s5_age:number;
//       s5_city:string;
//       s5_status:boolean;
//     }

//     // merging 
//     type alldata = student_1 & student_2 & student_3 & student_4 & student_5;

//     // assigning values:
//     let studentsData : alldata = {

//       s1_rollNo:45,
//       s1_name:"Abid Ali",
//       s1_age:23,
//       s1_city:"Mirpurkhas",
//       s1_status:true,

//       s2_rollNo:46,
//       s2_name:"Imran Ali",
//       s2_age:25,
//       s2_city:"Islamabad",
//       s2_status:false,

//       s3_rollNo:47,
//       s3_name:"Zahid Hussain",
//       s3_age:45,
//       s3_city:"Hyderabad",
//       s3_status:true,

//       s4_rollNo:48,
//       s4_name:"Bilal Ahmed ",
//       s4_age:28,
//       s4_city:"Karachi",
//       s4_status:false,

//       s5_rollNo:49,
//       s5_name:"Taimoor",
//       s5_age:32,
//       s5_city:"Lahore",
//       s5_status:true,

//     }

//     console.log(studentsData)
