// import React from 'react';
// import BlogComponent from '@/components/BlogComponent'; // Adjust the file path to where your BlogComponent lives
// import { blogType } from '../lib/blog/blog-type';

// export default function BlogPage() {
//   const blog: blogType[] = [
//     {
//       profile: 'https://i1-c.pinimg.com/control1/736x/5d/a3/60/5da360c98b9af0ad709fe18606992229.jpg',
//       name: 'John Doe',
//       position: 'Software Engineer'
//     },
//     {
//       profile: 'https://i.pinimg.com/736x/5d/a3/60/5da360c98b9af0ad709fe18606992229.jpg',
//       name: 'Jane Smith',
//       position: 'Product Manager'
//     },
//     {
//       profile: 'https://i.pinimg.com/736x/5d/a3/60/5da360c98b9af0ad709fe18606992229.jpg',
//       name: 'Alice Johnson',
//       position: 'UX Designer'
//     }
//   ];
//   return (
//     <div>
//       {blog.map(({ profile, name, position},_) => (
//         <BlogComponent 
//           key={_} 
//           profile={profile}
//           name={name}
//           position={position}
//         />
//       ))}
//     </div>
//   )
// }
