"use client";

import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";

import { Modal } from "../Modal";
import styles from "./replymodal.module.css";
import { Textarea } from "../Textarea";
import { SubmitButton } from "../SubmitButton";
import { Comment } from "../Comment";

export const ReplyModal = ({ comment, post }) => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.openModal();
  };

  const replyMutation = useMutation({
    mutationFn: (commentData) => {
      return fetch(
        `http://localhost:3000/api/comment/${comment.postId}/replies`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(commentData),
        }
      );
    },
  });

  const onSubmitCommentReply = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const text = formData.get("text");
    replyMutation.mutate({ comment, text });
  };

  return (
    <>
      <Modal ref={modalRef}>
        <form onSubmit={onSubmitCommentReply}>
          <div className={styles.body}>
            <Comment comment={comment} />
          </div>
          <div className={styles.divider}></div>
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <SubmitButton>Responder</SubmitButton>
          </div>
        </form>
      </Modal>
      <button className={styles.btn} onClick={openModal}>
        Responder
      </button>
    </>
  );
};
