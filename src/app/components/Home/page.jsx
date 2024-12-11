'use client';

import Link from 'next/link';

const posts = [
  { id: '1', title: 'Birinchi Post', content: 'Bu birinchi post mazmuni.' },
  { id: '2', title: 'Ikkinchi Post', content: 'Bu ikkinchi post mazmuni.' },
  { id: '3', title: 'Uchinchi Post', content: 'Bu uchinchi post mazmuni.' }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Blog Sahifasi</h1>
      <ul className="w-full max-w-md space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-50 transition"
          >
            <Link href={`/post/${post.id}`} className="text-lg font-semibold text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
 