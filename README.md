1. pega todos os posts
   `http://localhost:3000/api/posts?page=${page}`
2. pega os ratings do post
   `http://localhost:3000/api/post?postId=${postId}`
3. pega os detalhes do post por slug
   `http://localhost:3000/api/post/${slug}`
4. Adiciona um comentário
   `http://localhost:3000/api/comment/${post.id}`
5. Adiciona a resposta a um determinado comentário
   `http://localhost:3000/api/comment/${comment.postId}/replies`
6. Adiciona likes
   `http://localhost:3000/api/thumbs`
7. pega as respostas de um determinado comentário
   `http://localhost:3000/api/comment/${commentId}/replies`
