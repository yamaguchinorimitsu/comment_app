import consumer from "./consumer"

if(location.pathname.match(/\/items\/\d/)){

  // 以下を追加
  consumer.subscriptions.create({
    channel: "CommentChannel",
    item_id: location.pathname.match(/\d+/)[0]
  }, {

//どのチャネルを使用するかの定義は、7行目にあらかじめ記述されています
//consumer.subscriptions.create("CommentChannel", {   削除
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },


//20~24行目で、受け取った情報を含んだhtmlを作成し、htmlという変数に代入しています。dataの中からキー名を指定することで、コメントと送信者の情報を取り出すことができます。
//26行目で、ブラウザ上のcommentsというidを持った要素を取得しています。
//27行目で、insertAdjacentHTMLメソッドを使用し、comments要素の中の最後の子要素の後に、先ほど作成したhtmlを挿入します。つまり、コメント欄の最後尾としてコメントが追加されます。
//28、29行目で、コメント投稿フォームの要素を取得し、フォームの中身をリセットしています。これにより、フォームに入力したコメントの文字が削除され、新しく次のコメントが入力できるようになります。
  received(data) {
    const html = `
        <div class="comment">
          <p class="user-info">${data.user.nickname}： </p>
          <p>${data.comment.text}</p>
        </div>`
      const comments = document.getElementById("comments")
      comments.insertAdjacentHTML('beforeend', html)
      const commentForm = document.getElementById("comment-form")
      commentForm.reset();
  }
})
}


