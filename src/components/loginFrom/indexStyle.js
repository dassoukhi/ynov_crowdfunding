import styled from 'styled-components'

// CSS for Button
export const Buttons = styled.button`
  cursor: pointer;
  width: 110%;
  padding: 0 8px;
  background: #ff0f00;
  border: 1px solid #ff0f00;
  color: #fff;
  border-radius: 3px;
  font-weight: 600;
  font-size: 14px;
  height: 28px;
  line-height: 26px;
  outline: none;
  white-space: nowrap;
  font: inherit;
  vertical-align: baseline;
  position: relative;
`
//CSS for a form
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
//CSS for Input
export const Input = styled.input`
  width: 110%;
  margin: auto 40px 6px;
  height: 36px;
  border: 1px solid #efefef;
  border-radius: 3px;
  box-sizing: border-box;
  border-color: #bbb;
  color: black;
  flex-direction: column;
`
