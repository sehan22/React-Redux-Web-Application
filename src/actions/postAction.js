import {FETCH_BUTTON_CLICKED, SELECT_POST} from './types';
import axios from "axios";

//action creator
/*export const fetchPosts = () => {
    //action
    return {
        type: `${FETCH_BUTTON_CLICKED}`,
        payload: [
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {
                "postId": 1,
                "id": 2,
                "name": "quo vero reiciendis velit similique earum",
                "email": "Jayne_Kuhic@sydney.com",
                "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            },
            {
                "postId": 1,
                "id": 3,
                "name": "odio adipisci rerum aut animi",
                "email": "Nikita@garfield.biz",
                "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
            },
            {
                "postId": 1,
                "id": 4,
                "name": "alias odio sit",
                "email": "Lew@alysha.tv",
                "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
            },
            {
                "postId": 1,
                "id": 5,
                "name": "vero eaque aliquid doloribus et culpa",
                "email": "Hayden@althea.biz",
                "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
            }
        ]
    }
}*/

/*export function fetchPosts() {
    return function (dispatch) {
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments").then(res => {
            dispatch({
                type: SELECT_POST,
                payload: res.data
            })
        })
    }
}*/

export const fetchPosts = () => dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then(res => {
            dispatch({
                type: FETCH_BUTTON_CLICKED,
                payload: res.data
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
};

export const selectPost = (post) => {
    return {
        type: SELECT_POST,
        payload: post
    }
}