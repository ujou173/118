// ? 1번, "Hello, World!"를 콘솔에 출력하는 코드를 작성하시오.
console.log("Hello, world!");

// ? 2번, 변수를 선언하고, 그 변수에 숫자 10을 할당하는 코드를 작성하세요.
let a = 10;

// ? 3번, 문자열 "Hello, "와 "JavaScript!"를 결합하여 "Hello, JavaScript!"를 출력하는 코드를 작성하세요.
const b = "Hello, ";
const c = "JavaScript!";
console.log(b + c);
// 또는 console.log("Hello, " + "JavaScript!");

// ? 4번, 두 수를 더하는 함수를 작성하고, 이를 사용하여 5와 10의 합을 계산하세요.
function add(a, b) {
  return a + b;
};
console.log(add(5, 10));

// ? 5번, for 반복문을 사용하여 1부터 10까지의 수를 출력하는 코드를 작성하세요.
for(i = 1; i <= 10; i++) {
  console.log(i);
};

// ? 6번, if문을 사용하여 어떤 변수가 짝수인지 홀수인지 판별하는 코드를 작성하세요.
function oddCheck(number) {
  if(number % 2 === 0) {
    console.log(number + '는 짝수입니다.');
  } else {
    console.log(number + '는 홀수입니다.');
  }
};

// ? 7번, JavaScript에서 null과 undefined의 차이점을 설명하세요.
console.log("null은 값이 없다는 뜻이지만, undefined는 값을 찾지 못하여 undefined라는 값을 할당한 형태다.");

// ? 8번, 자바스크립트에서 식별자로 사용 될 수 있는 예를 3가지 제시하세요.
console.log("변수 식별자: const, let, var / 함수 식별자: function add(a, b){return a + b}; 에서 add 부분 / 속성 식별자: person.name에서 name 부분");

// ? 9번, const, let, var의 차이점을 설명하세요.
console.log("const는 상수로, 한번 선언하면 재할당이 불가능하여 그 값이 바뀌지 않는다. 또한 블록 스코프를 가진다.");
console.log("let은 변수로, 재할당이 가능하며 값이 바뀔 수 있다. 또한 값이 할당되기 전까지 사용할 수 없다.");
console.log("var는 변수로, 재선언과 재할당이 모두 가능하며, 값이 바뀔 수 있다. 함수 스코프를 가지며 함수 밖에서 선언 될 경우, 전역 스코프를 가진다. 또한 값이 할당되기 전에도 사용할 수 있다.");

// ? 10번, 자바스크립트에서 주석을 어떻게 작성하는지 예시를 들어보세요.
// 한줄 주석은 이렇게 /(슬래쉬) 두개로 작성합니다.
/*  
  여러줄을 주석처리 할 때는
  이렇게 슬래쉬(/)와 *(애스터리스크)를 이용해 주석을 처리합니다.
*/

// ? 11번, 자바스크립트에서 사용할 수 있는 특수 문자를 3가지 예시와 함께 제시하세요.
console.log('Hello, "JavaScript!"'); // Hello, "JavaScript!"
console.log('Hello\\JavaScript!'); // Hello\JavaScript!
console.log('Hello\nJavaScript!');
// Hello
// JavaScript!

// ? 12번, "use strict"는 무엇이고, 어떻게 사용하는지 설명하세요.
console.log("스크립트 또는 함수 시작 부분에서 선언하여 사용하고, 사용시 JavaScript가 더 엄격한 문법 및 에러 처리를 적용하도록 변경됩니다");
console.log("엄격모드를 사용시 변수의 암묵적인 전역을 금지하고, 변수 삭제를 금지하며, this의 바인딩을 정확하게 하고, 중복 된 매개 변수를 금지하는 등 기능이 변경됩니다.");

// ? 13번, 세미콜론(;)은 언제 사용되는지 설명하고, 세미콜론을 사용해야하는 상황의 예를 제시하세요.
console.log("세미콜론은 코드가 끝나는 부분을 명시하는 역할을 하며, 코드의 끝부분에 사용됩니다. 예전에는 컴퓨터에게 코드가 실행된 다음 끝났다는 것을 알려줘야 했기 때문에 모든 코드의 끝부분에 세미콜론을 작성해야 하였으나, 요즘은 세미콜론이 없어도 인식을 하도록 변경되어 꼭 해야 하는 작업은 아니게 되었습니다. 다만 개발자들에 따라 호불호가 갈리기 때문에 협업을 할 경우 미리 규칙을 정해두는 것이 좋습니다. 다만 Python 같은 경우는 세미콜론을 사용하면 오류가 발생하므로 사용하면 안됩니다.");

// ? 14번, 자바스크립트에서 대소문자를 구분하는 예를 들어 보세요.
console.log("문자열을 비교하거나 변수 이름을 구별할 때는 대소문자를 구분합니다. 예를들자면 'hello'와 'Hello'는 다른 문자열입니다. 또한 변수 name과 Name은 다른 변수입니다. 그 외에도 함수명이나 객체의 속성값 등 여러 상황에서 대소문자를 구분합니다.");

// ? 15번, 자바스크립트에서 사용하는 데이터 타입들을 나열해보세요.
console.log("boolean, string, number, array, object, undefined, null, function, symbol의 9개 타입이 있었으나 최근 bigint가 추가되었습니다.");

// ? 16번, 자바스크립트에서 변수를 어떻게 선언하는지 예를 들어 설명해보세요.
console.log("자바스크립트에서 변수는 변수 타입(const let var)을 선언하고, 변수 이름(name)을 선언한 다음, 변수에 값('John')을 할당합니다. const name = 'John'");
console.log("let이나 var의 경우 재할당을 할 때에는 변수 타입을 생략하고 변수 이름과 값만 선언합니다.");

// ? 17번, null과 undefined의 차이점은 무엇인가요?
console.log("null은 의도적으로 값이 없다는 것을 명시하는 것이고, undefined는 변수에 값이 할당되지 않았거나, 함수의 return값이 없을 경우, 객체에 해당 속성이나 배열에 해당 요소가 없을경우 반환되는 값입니다.");

// ? 18번, 자바스크립트에서 'truthy'와 'falsy'의 값은 무엇인가요? 각각 2개의 예를 들어보세요.
console.log("true / false와 같이 직접적으로 참과 거짓을 의미하지 않지만, 참으로 간주되는 값들과 거짓으로 간주되는 값들을 의미합니다.");
console.log("truthy(참으로 간주되는 값들)에는 0이 아닌 숫자, '비어있지 않은 문자열' 등이 있습니다.");
console.log("falsy(거짓으로 간주되는 값들)에는 truthy에서 든 예시 외에도 null이나 undefined 등이 있습니다.");

// ? 19번, typeof 연산자를 사용해 변수의 타입을 확인하는 예제 코드를 작성해보세요.
let value = 'name';
console.log(typeof(value));
console.log("typeof()의 괄호 안에 변수를 넣음으로써 typeof() 메서드가 해당 변수의 타입을 체크합니다.");

//  ? 20번, 자바스크립트에서 ==와 ===의 차이점을 설명해보세요.
console.log("==는 동등 연산자로 값을 비교합니다. 값을 비교할때 강제적으로 타입을 변경하기 때문에 타입은 무시되며 오로지 값이 동등한지만 체크합니다. ===는 일치 연산자로 타입을 변경하지 않고 값을 비교합니다. 따라서 타입을 함께 체크하는 더욱 엄격한 비교를 실행합니다.");

// ? 21번, 변수 x의 값에 10을 할당하고, x의 값이 10인지 확인하는 코드를 작성해보세요.
const x = 10;
if(x === 10) {
  console.log("x의 값은 10입니다.");
} else {
  console.log("x의 값은 10이 아닙니다.");
};

// ? 22번, +, -, *, / 연산자를 사용해 간단한 산술 연산을 하는 코드를 작성해보세요.
function calculate(a, b, operator) {
  let result;
  switch(operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      result = "+, -, *, / 중 하나를 입력해주세요.";
  }
  return result;
};
console.log(calculate(15, 5, "+"));

// ? 23번, 10을 3으로 나눈 나머지를 구하는 코드를 작성해보세요.
console.log(10/3);