'use client';

const posts = [
  { id: '1', title: 'Birinchi Post', content: 'Bu birinchi post mazmuni.' },
  { id: '2', title: 'Ikkinchi Post', content: 'Bu ikkinchi post mazmuni.' },
  { id: '3', title: 'Uchinchi Post', content: 'Bu uchinchi post mazmuni.' }
];

export default function PostPage({ params }) {
  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-lg text-gray-600">Post topilmadi!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700">{post.content}</p>
    </div>
  );
}
