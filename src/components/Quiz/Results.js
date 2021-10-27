export default function Results(props) {
  const { userAnswers } = props;

  const results = userAnswers.map((answer) => {
    return <li>{answer.answer}</li>;
  });

  return <ul>{results}</ul>;
}
