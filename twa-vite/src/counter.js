export function setupCounter(element) {
  let counter = 10
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Count is ${counter}`
    document.title = `Contador: ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter - 1))
  setCounter(10)
}
