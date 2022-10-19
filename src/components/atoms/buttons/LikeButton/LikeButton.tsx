import React from 'react';
import Like from 'assets/icons/like.svg';
import Unlike from 'assets/icons/unlike.svg';

type Props = {
  liked?: boolean;
};

export const LikeButton = ({ liked }: Props) => {
  return <button type="button">{liked ? <Like /> : <Unlike />}</button>;
};
