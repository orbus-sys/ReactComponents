import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Jerry" timeAgo="Today at 10:12 AM" post="Come catch these hands." avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Tom" timeAgo="Today at 11:13 AM" post="Nah, you good. Imma be chilling over here" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Cousin Muscle" timeAgo="Today at 6:45 PM" post="Yo, Jerry. Hit me up when you want me to handle this lightwork" avatar={faker.image.avatar()}/>
           </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);