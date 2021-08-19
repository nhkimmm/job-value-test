/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

export const BasicContainer = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  font-size: 24px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background: lightgray;

  &:hover {
    ${({ disabled }) =>
      !disabled &&
      css`
        background: gray;
        cursor: pointer;
      `}
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const InfoContainer = styled.div`
  width: 200px;
  font-size: 14px;

  + div {
    margin-top: 20px;
  }

  > p {
    margin: 5px;
    font-size: 16px;
    font-weight: bold;
  }

  > label {
    display: inline-block;
    font-size: 20px;
    width: 100px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid lightgray;
  font-size: 20px;
`;

/* test components */

export const TestContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: 20px;
  align-items: end;
  row-gap: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`;
export const ProgressPercentile = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

const ProgressStatus = styled.div`
  grid-column: 1 / span 2;
  background: #efefef;
  width: ${({ progressRate }) =>
    progressRate ? progressRate.progressRate : 100}%;
  height: 10px;
  border-radius: 5px;
  position: relative;

  > div {
    background: lightgray;
    position: absolute;
  }
`;

export const ProgressBar = progressRate => {
  return (
    <>
      <ProgressStatus>
        <ProgressStatus progressRate={progressRate} />
      </ProgressStatus>
    </>
  );
};

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;

export const Content = styled.p``;

export const QuestionBox = ({
  qNum,
  option1,
  option2,
  desc1,
  desc2,
  score1,
  score2,
  optionClick,
  checked,
}) => {
  const handleClick = e => {
    const idx = e.target.name;
    const { value } = e.target;
    return optionClick(idx, value);
  };

  // eslint-disable-next-line consistent-return
  const handleCheck = value => {
    // !checked? false:
    // // answerScore score 같은가? true : false
    if (checked.bool === false) {
      return false;
    }
    if (value === checked.answerScore) {
      return true;
    }
  };

  return (
    <Option>
      <h3>Q{qNum}</h3>
      <div>
        <label>
          <input
            type="radio"
            className="btn"
            name={qNum}
            value={score1}
            onClick={e => handleClick(e)}
            defaultChecked={handleCheck(score1)}
          />
          {option1}
        </label>
        <label>
          <input
            type="radio"
            className="btn"
            name={qNum}
            value={score2}
            onClick={e => handleClick(e)}
            defaultChecked={handleCheck(score2)}
          />
          {option2}
        </label>
      </div>
      <p>
        *{option1}: {desc1}
      </p>
      <p>
        *{option2}: {desc2}
      </p>
    </Option>
  );
};

const Option = styled.div`
  box-sizing: border-box;
  padding: 20px 40px;
  width: 100%;
  background: lightgray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;

  > p {
    margin: 0 0 14px 0;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-weight: bold;
  }
`;

// export const InputRadio = styled.input.attrs({type: 'radio'})`
//     opacity: 0;
// `;

// const Laber = styled.label`
// `;

// const selectBox = (idx, question, questionScore) => {
//     <label><input type='radio' value={questionScore} />{question}</label>
// }

export const Footer = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;

  > button {
    width: 200px;
    height: 40px;
  }
`;
