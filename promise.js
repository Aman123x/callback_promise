
const posts = [
    { title: 'Post One', body: "This is post one" },
    { title: "Post Two", body: "This is post two" }
];

let lastActivityTime = "";

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title} - Last Activity Time: ${lastActivityTime}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date().toLocaleTimeString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
}

Promise.all([createPost({ title: 'Post Three', body: 'This is Post Three' }), updateLastUserActivityTime()],
            [createPost({ title: 'Post Four', body: 'This is Post Four' }), updateLastUserActivityTime()])
    .then(() => getPosts()) // Update the posts on the page after creating and updating activity time
    // .then(() => getPosts()) // Update the posts on the page after deleting a post
    .catch((error) => console.error(error));
