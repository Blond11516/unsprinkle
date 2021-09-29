import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
      <picture>
        <Source imagePath={src} extension="avif" />
        <Source imagePath={src} extension="jpg" />
        <Image
          alt={alt}
          src={`${src}.jpg`}
        />
      </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Source = ({extension, imagePath}) => {
  const getSourceSet = (extension) => `
    ${imagePath}.${extension} 1x,
    ${imagePath}@2x.${extension} 2x,
    ${imagePath}@3x.${extension} 3x
  `
  
  return (<source
    type={`image/${extension}`}
    srcSet={getSourceSet(extension)}
  />)
}

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  gap: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 4px 0;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  &:not(:first-child) {
    margin-left: 4px;
  }
`;

export default PhotoGridItem;
