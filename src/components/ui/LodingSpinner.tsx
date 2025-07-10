import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 32px 0;
`;

const Dot = styled.div<{ delay: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ff7a00;
  opacity: 0.3;
  animation: ${fade} 2s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay};
`;

const LoadingSpinner = () => {
  return (
    <DotWrapper>
      <Dot delay="0s" />
      <Dot delay="0.2s" />
      <Dot delay="0.4s" />
      <Dot delay="0.6s" />
      <Dot delay="0.8s" />
    </DotWrapper>
  );
};

export default LoadingSpinner;
