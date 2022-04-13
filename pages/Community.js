import React from 'react';
import CommunityPost from '../components/Community/CommunityPost/CommunityPost';
import CompleteWork from '../components/Community/CompleteWork/CompleteWork';
import RelatedDoc from '../components/Community/RelatedDoc/RelatedDoc';

const Community = () => {
    return (
        <div>
            <RelatedDoc/>
            <CompleteWork/>
            <CommunityPost/>
        </div>
    );
};

export default Community;