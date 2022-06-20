interface Post {
  title:string,
  content:string,
  subTitle?:string,
  readonly summary?:string,
}

function printPost(post:Post) {
  console.log(post.title);
  console.log(post.title);
}
printPost({
  title: 'Jdon',
  content: 'ddd'
})

interface Cache {
  [prop: string] : string
}