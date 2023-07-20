import React, { useState, useEffect } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import Comment from './Comment';
import { instance } from '../../axios/Instance';

export default function AddComment({addCommentModal, setAddCommentModal, postID, userID}) {

    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([])

    //fetch post details on component mounting
    useEffect(()=>{
        instance.get('/post/post-details/'+postID)
        .then(resp => {
            if(resp.data.success === false){
                setError(resp.data.message)
            }else{
                setComments(resp.data.data.post.comments)
            }
        }).catch(err => setError(err.message))
    },[postID, comments])

    //add comment by posting it to the database
    const handleAddComment = (e) => {
        e.preventDefault();
        let data={}
        data.userID=userID;
        data.comment=comment;
        console.log(data);
        instance.post('/post/add-comment/'+postID, {...data})
        .then(resp => {
            if(resp.data.success === false){
                setError(resp.data.message)
            }else{
                setComment('');
            }
        })
        .catch(err => setError(err.message))
    }

    return (
    <>

      <MDBModal show={addCommentModal} setShow={setAddCommentModal} tabIndex='-1'>
        <MDBModalDialog scrollable size="xl">
          <MDBModalContent>
            
            <MDBModalHeader className='bg-primary'>
              <MDBModalTitle className='text-light'>Comments for post </MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setAddCommentModal(!addCommentModal)}
              ></MDBBtn>
            </MDBModalHeader>
            
            <MDBModalBody style={{backgroundColor:'#FFFEE1'}}>
                <>
                    {
                        comments.length === 0 && <div className='h3 text-center text-secondary'>No comments yet</div>
                    }
                    {
                        comments?.map((comment, index) => (<Comment key={index} comment={comment}/>))
                    }
                </>
            </MDBModalBody>
            
            <MDBModalFooter className='bg-primary'>
                <textarea value={comment} onChange={(e)=>setComment(e.target.value)} cols="30" rows="2" style={{borderRadius:'9px'}} placeholder='add your comments here' className='px-3 w-100'></textarea>
                <MDBBtn color='light' onClick={handleAddComment}>
                    ADD COMMENT
                </MDBBtn>
                <MDBBtn color='danger' onClick={() => setAddCommentModal(!setAddCommentModal)}>
                    Close
                </MDBBtn>
            </MDBModalFooter>
          
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}