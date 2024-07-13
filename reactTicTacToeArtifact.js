import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const TicTacToe = () => {
  const [board, setBoard] = useState([null,null,null,null,"X",null,null,null,null]);
  const [isXNext, setIsXNext] = useState(false);
  const [hasPlayerPlayed, setHasPlayerPlayed] = useState(false);
  const [winner, setWinner] = useState(null);
  const [remixLink, setRemixLink] = useState('');

  useEffect(() => {
    window.getGameState = () => ({
      board,
      isXNext,
      hasPlayerPlayed,
      winner
    });
    updateRemixLink();
  }, [board, isXNext, hasPlayerPlayed, winner]);

  const updateRemixLink = () => {
    function decodeModifyAndEncodeReactComponent(encodedString, boardState, isXNext, hasUserPlayed) {
      const decodedString = decodeURIComponent(encodedString);
      const modifiedString = decodedString
        .replace(
          /const \[board, setBoard\] = useState\((.*?)\);/,
          `const [board, setBoard] = useState(${JSON.stringify(boardState)});`
        )
        .replace(
          /const \[isXNext, setIsXNext\] = useState\((.*?)\);/,
          `const [isXNext, setIsXNext] = useState(${isXNext});`
        )
        .replace(
          /const \[hasPlayerPlayed, setHasPlayerPlayed\] = useState\((.*?)\);/,
          `const [hasPlayerPlayed, setHasPlayerPlayed] = useState(${hasUserPlayed});`
        );
      return encodeURIComponent(modifiedString);
    }

    let link = "https://claude.ai/remix#q=";
    let baseCode = "import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%27react%27%3B%0Aimport%20%7B%20Button%20%7D%20from%20%27%40%2Fcomponents%2Fui%2Fbutton%27%3B%0A%0Aconst%20TicTacToe%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bboard%2C%20setBoard%5D%20%3D%20useState(%5Bnull%2Cnull%2Cnull%2Cnull%2C%22X%22%2Cnull%2Cnull%2Cnull%2Cnull%5D)%3B%0A%20%20const%20%5BisXNext%2C%20setIsXNext%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BhasPlayerPlayed%2C%20setHasPlayerPlayed%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5Bwinner%2C%20setWinner%5D%20%3D%20useState(null)%3B%0A%20%20const%20%5BremixLink%2C%20setRemixLink%5D%20%3D%20useState(%27%27)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20window.getGameState%20%3D%20()%20%3D%3E%20(%7B%0A%20%20%20%20%20%20board%2C%0A%20%20%20%20%20%20isXNext%2C%0A%20%20%20%20%20%20hasPlayerPlayed%2C%0A%20%20%20%20%20%20winner%0A%20%20%20%20%7D)%3B%0A%20%20%20%20updateRemixLink()%3B%0A%20%20%7D%2C%20%5Bboard%2C%20isXNext%2C%20hasPlayerPlayed%2C%20winner%5D)%3B%0A%0A%20%20const%20updateRemixLink%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20function%20decodeModifyAndEncodeReactComponent(encodedString%2C%20boardState%2C%20isXNext%2C%20hasUserPlayed)%20%7B%0A%20%20%20%20%20%20const%20decodedString%20%3D%20decodeURIComponent(encodedString)%3B%0A%20%20%20%20%20%20const%20modifiedString%20%3D%20decodedString%0A%20%20%20%20%20%20%20%20.replace(%0A%20%20%20%20%20%20%20%20%20%20%2Fconst%20%5C%5Bboard%2C%20setBoard%5C%5D%20%3D%20useState%5C((.*%3F)%5C)%3B%2F%2C%0A%20%20%20%20%20%20%20%20%20%20%60const%20%5Bboard%2C%20setBoard%5D%20%3D%20useState(%24%7BJSON.stringify(boardState)%7D)%3B%60%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20.replace(%0A%20%20%20%20%20%20%20%20%20%20%2Fconst%20%5C%5BisXNext%2C%20setIsXNext%5C%5D%20%3D%20useState%5C((.*%3F)%5C)%3B%2F%2C%0A%20%20%20%20%20%20%20%20%20%20%60const%20%5BisXNext%2C%20setIsXNext%5D%20%3D%20useState(%24%7BisXNext%7D)%3B%60%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20.replace(%0A%20%20%20%20%20%20%20%20%20%20%2Fconst%20%5C%5BhasPlayerPlayed%2C%20setHasPlayerPlayed%5C%5D%20%3D%20useState%5C((.*%3F)%5C)%3B%2F%2C%0A%20%20%20%20%20%20%20%20%20%20%60const%20%5BhasPlayerPlayed%2C%20setHasPlayerPlayed%5D%20%3D%20useState(%24%7BhasUserPlayed%7D)%3B%60%0A%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20return%20encodeURIComponent(modifiedString)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20let%20link%20%3D%20%22https%3A%2F%2Fclaude.ai%2Fremix%23q%3D%22%3B%0A%20%20%20%20let%20baseCode%20%3D%20%22import%2520React%252C%2520%257B%2520useState%252C%2520useEffect%2520%257D%2520from%2520%27react%27%253B%250Aimport%2520%257B%2520Button%2520%257D%2520from%2520%27%2540%252Fcomponents%252Fui%252Fbutton%27%253B%250A%250Aconst%2520TicTacToe%2520%253D%2520()%2520%253D%253E%2520%257B%250A%2520%2520const%2520%255Bboard%252C%2520setBoard%255D%2520%253D%2520useState(%255Bnull%252Cnull%252Cnull%252Cnull%252C%2522X%2522%252Cnull%252Cnull%252Cnull%252Cnull%255D)%253B%250A%2520%2520const%2520%255BisXNext%252C%2520setIsXNext%255D%2520%253D%2520useState(false)%253B%250A%2520%2520const%2520%255BhasPlayerPlayed%252C%2520setHasPlayerPlayed%255D%2520%253D%2520useState(false)%253B%250A%250A%2520%2520useEffect(()%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%252F%252F%2520Attach%2520all%2520state%2520variables%2520to%2520the%2520window%2520object%250A%2520%2520%2520%2520window.getGameState%2520%253D%2520()%2520%253D%253E%2520(%257B%250A%2520%2520%2520%2520%2520%2520board%252C%250A%2520%2520%2520%2520%2520%2520isXNext%252C%250A%2520%2520%2520%2520%2520%2520hasPlayerPlayed%250A%2520%2520%2520%2520%257D)%253B%250A%2520%2520%257D%252C%2520%255Bboard%252C%2520isXNext%252C%2520hasPlayerPlayed%255D)%253B%250A%250A%2520%2520const%2520handleClick%2520%253D%2520(index)%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520if%2520(board%255Bindex%255D%2520%257C%257C%2520hasPlayerPlayed)%2520return%253B%250A%2520%2520%2520%2520const%2520newBoard%2520%253D%2520%255B...board%255D%253B%250A%2520%2520%2520%2520newBoard%255Bindex%255D%2520%253D%2520isXNext%2520%253F%2520%27X%27%2520%253A%2520%27O%27%253B%250A%2520%2520%2520%2520setBoard(newBoard)%253B%250A%2520%2520%2520%2520setIsXNext(!isXNext)%253B%250A%2520%2520%2520%2520setHasPlayerPlayed(true)%253B%250A%2520%2520%257D%253B%250A%250A%2520%2520const%2520remixTurn%2520%253D%2520()%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520setHasPlayerPlayed(false)%253B%250A%2520%2520%257D%253B%250A%250A%2520%2520const%2520renderSquare%2520%253D%2520(index)%2520%253D%253E%2520(%250A%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520className%253D%2522w-20%2520h-20%2520border%2520border-gray-400%2520text-4xl%2520font-bold%2522%250A%2520%2520%2520%2520%2520%2520onClick%253D%257B()%2520%253D%253E%2520handleClick(index)%257D%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%257Bboard%255Bindex%255D%257D%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520)%253B%250A%250A%2520%2520return%2520(%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522flex%2520flex-col%2520items-center%2520justify-center%2520h-screen%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ch1%2520className%253D%2522text-2xl%2520font-bold%2520mb-4%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%257BhasPlayerPlayed%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253F%2520%2522Waiting%2520for%2520other%2520player%2520to%2520remix...%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253A%2520%2560Current%2520turn%253A%2520%2524%257BisXNext%2520%253F%2520%27X%27%2520%253A%2520%27O%27%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522grid%2520grid-cols-3%2520gap-2%2520mb-4%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%255B0%252C%25201%252C%25202%252C%25203%252C%25204%252C%25205%252C%25206%252C%25207%252C%25208%255D.map(index%2520%253D%253E%2520renderSquare(index))%257D%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253CButton%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520variant%253D%2522destructive%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520onClick%253D%257BremixTurn%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522mt-4%2522%250A%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Remix%2520for%2520other%2520player%27s%2520turn%250A%2520%2520%2520%2520%2520%2520%253C%252FButton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520)%253B%250A%257D%253B%250A%250Aexport%2520default%2520TicTacToe%253B%22%3B%0A%20%20%20%20let%20prompt%20%3D%20%22Hi%252C%2520Claude!%2520Let%2527s%2520recreate%2520this%2520artifact.%2520After%2520you%2520reproduce%2520this%2520artifact%252C%2520can%2520you%2520add%2520a%2520text%2520for%2520the%2520user%2520%2522please%2520publish%2520it%2520for%2520the%2520next%2520turn%2522%253F.%2520no%2520need%2520to%2520add%2520anything%2520else%2520%2526amp%253Battachment%253D%253Cremix_instructions%253EThe%2520following%2520is%2520an%2520artifact%2520created%2520from%2520an%2520earlier%2520conversation.%2520Please%2520begin%2520the%2520conversation%2520by%2520reproducing%2520the%2520content%2520in%2520the%2520appropriate%2520artifact%2520line%2520by%2520line%2520without%2520any%2520change.%2520Doing%2520so%2520will%2520render%2520the%2520artifact%2520in%2520the%2520UI%2520and%2520allows%2520the%2520user%2520to%2520interact%2520with%2520it.%2520To%2520maintain%2520functionality%2520and%2520usefulness%252C%2520any%2520changes%2520and%2520remixes%2520created%2520in%2520this%2520conversation%2520should%2520maintain%2520the%2520full%2520content%2520each%2520time%2520without%2520omission%2520(e.g.%2520Do%2520not%2520leave%2520comments%2520like%2520%2522%252F%252F%2520Rest%2520of%2520the%2520code%2520here...%2522).%253C%252Fremix_instructions%253E%250A%253Cartifact%253E%250A%253Ctitle%253ETic%2520Tac%2520Toe%2520Game%2520with%2520Twists%253C%252Ftitle%253E%250A%253Ctype%253Eapplication%252Fvnd.ant.react%253C%252Ftype%253E%250Aundefined%250A%253Ccontent%253E%22%3B%0A%20%20%20%20let%20gameState%20%3D%20window.getGameState()%3B%0A%20%20%20%20let%20code%20%3D%20decodeModifyAndEncodeReactComponent(baseCode%2C%20gameState.board%2C%20gameState.isXNext%2C%20false)%3B%0A%20%20%20%20let%20footer%20%3D%20%22%250A%253C%252Fcontent%253E%250A%253C%252Fartifact%253E%22%3B%0A%20%20%20%20let%20next%20%3D%20link%20%2B%20prompt%20%2B%20code%20%2B%20footer%3B%0A%20%20%20%20setRemixLink(next)%3B%0A%20%20%20%20console.log(%22Remix%20link%20updated%3A%22%2C%20next)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20handleClick%20%3D%20(index)%20%3D%3E%20%7B%0A%20%20%20%20if%20(board%5Bindex%5D%20%7C%7C%20hasPlayerPlayed%20%7C%7C%20winner)%20return%3B%0A%20%20%20%20const%20newBoard%20%3D%20%5B...board%5D%3B%0A%20%20%20%20newBoard%5Bindex%5D%20%3D%20isXNext%20%3F%20%27X%27%20%3A%20%27O%27%3B%0A%20%20%20%20setBoard(newBoard)%3B%0A%20%20%20%20const%20newWinner%20%3D%20checkWinner(newBoard)%3B%0A%20%20%20%20if%20(newWinner)%20%7B%0A%20%20%20%20%20%20setWinner(newWinner)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20setIsXNext(!isXNext)%3B%0A%20%20%20%20%20%20setHasPlayerPlayed(true)%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20const%20remixTurn%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20console.log(%22Remix%20button%20clicked%22)%3B%0A%20%20%20%20console.log(%22Current%20remix%20link%3A%22%2C%20remixLink)%3B%0A%20%20%20%20console.log(%22New%20dynamically%20created%20page%3A%22%2C%20remixLink)%3B%0A%20%20%20%20setHasPlayerPlayed(false)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20renderSquare%20%3D%20(index)%20%3D%3E%20(%0A%20%20%20%20%3Cbutton%0A%20%20%20%20%20%20className%3D%22w-20%20h-20%20border%20border-gray-400%20text-4xl%20font-bold%22%0A%20%20%20%20%20%20onClick%3D%7B()%20%3D%3E%20handleClick(index)%7D%0A%20%20%20%20%20%20disabled%3D%7BhasPlayerPlayed%20%7C%7C%20winner%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%7Bboard%5Bindex%5D%7D%0A%20%20%20%20%3C%2Fbutton%3E%0A%20%20)%3B%0A%0A%20%20const%20checkWinner%20%3D%20(squares)%20%3D%3E%20%7B%0A%20%20%20%20const%20lines%20%3D%20%5B%0A%20%20%20%20%20%20%5B0%2C%201%2C%202%5D%2C%0A%20%20%20%20%20%20%5B3%2C%204%2C%205%5D%2C%0A%20%20%20%20%20%20%5B6%2C%207%2C%208%5D%2C%0A%20%20%20%20%20%20%5B0%2C%203%2C%206%5D%2C%0A%20%20%20%20%20%20%5B1%2C%204%2C%207%5D%2C%0A%20%20%20%20%20%20%5B2%2C%205%2C%208%5D%2C%0A%20%20%20%20%20%20%5B0%2C%204%2C%208%5D%2C%0A%20%20%20%20%20%20%5B2%2C%204%2C%206%5D%2C%0A%20%20%20%20%5D%3B%0A%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20lines.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20const%20%5Ba%2C%20b%2C%20c%5D%20%3D%20lines%5Bi%5D%3B%0A%20%20%20%20%20%20if%20(squares%5Ba%5D%20%26%26%20squares%5Ba%5D%20%3D%3D%3D%20squares%5Bb%5D%20%26%26%20squares%5Ba%5D%20%3D%3D%3D%20squares%5Bc%5D)%20%7B%0A%20%20%20%20%20%20%20%20return%20squares%5Ba%5D%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20return%20null%3B%0A%20%20%7D%3B%0A%0A%20%20const%20getGameStatus%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20if%20(winner)%20%7B%0A%20%20%20%20%20%20return%20%60Winner%3A%20%24%7Bwinner%7D%60%3B%0A%20%20%20%20%7D%20else%20if%20(hasPlayerPlayed)%20%7B%0A%20%20%20%20%20%20return%20%22Waiting%20for%20other%20player%20to%20remix...%22%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20return%20%60Current%20turn%3A%20%24%7BisXNext%20%3F%20%27X%27%20%3A%20%27O%27%7D%60%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3Cdiv%20className%3D%22flex%20flex-col%20items-center%20justify-center%20h-screen%22%3E%0A%20%20%20%20%20%20%3Ch1%20className%3D%22text-2xl%20font-bold%20mb-4%22%3E%0A%20%20%20%20%20%20%20%20%7BgetGameStatus()%7D%0A%20%20%20%20%20%20%3C%2Fh1%3E%0A%20%20%20%20%20%20%3Cdiv%20className%3D%22grid%20grid-cols-3%20gap-2%20mb-4%22%3E%0A%20%20%20%20%20%20%20%20%7B%5B0%2C%201%2C%202%2C%203%2C%204%2C%205%2C%206%2C%207%2C%208%5D.map(index%20%3D%3E%20renderSquare(index))%7D%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3CButton%20%0A%20%20%20%20%20%20%20%20variant%3D%22destructive%22%0A%20%20%20%20%20%20%20%20onClick%3D%7BremixTurn%7D%0A%20%20%20%20%20%20%20%20className%3D%22mt-4%22%0A%20%20%20%20%20%20%20%20disabled%3D%7Bwinner%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Remix%20for%20other%20player%27s%20turn%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3Cp%20className%3D%22text-2xl%20font-bold%20mt-8%22%3E%0A%20%20%20%20%20%20%20%20Please%20publish%20it%20for%20the%20next%20turn%0A%20%20%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20TicTacToe%3B%22";
    let prompt = "Hi%2C%20Claude!%20Let%27s%20recreate%20this%20artifact.%20After%20you%20reproduce%20this%20artifact%2C%20can%20you%20add%20a%20text%20for%20the%20user%20%22please%20publish%20it%20for%20the%20next%20turn%22%3F.%20no%20need%20to%20add%20anything%20else%20%26amp%3Battachment%3D%3Cremix_instructions%3EThe%20following%20is%20an%20artifact%20created%20from%20an%20earlier%20conversation.%20Please%20begin%20the%20conversation%20by%20reproducing%20the%20content%20in%20the%20appropriate%20artifact%20line%20by%20line%20without%20any%20change.%20Doing%20so%20will%20render%20the%20artifact%20in%20the%20UI%20and%20allows%20the%20user%20to%20interact%20with%20it.%20To%20maintain%20functionality%20and%20usefulness%2C%20any%20changes%20and%20remixes%20created%20in%20this%20conversation%20should%20maintain%20the%20full%20content%20each%20time%20without%20omission%20(e.g.%20Do%20not%20leave%20comments%20like%20%22%2F%2F%20Rest%20of%20the%20code%20here...%22).%3C%2Fremix_instructions%3E%0A%3Cartifact%3E%0A%3Ctitle%3ETic%20Tac%20Toe%20Game%20with%20Twists%3C%2Ftitle%3E%0A%3Ctype%3Eapplication%2Fvnd.ant.react%3C%2Ftype%3E%0Aundefined%0A%3Ccontent%3E";
    let gameState = window.getGameState();
    let code = decodeModifyAndEncodeReactComponent(baseCode, gameState.board, gameState.isXNext, false);
    let footer = "%0A%3C%2Fcontent%3E%0A%3C%2Fartifact%3E";
    let next = link + prompt + code + footer;
    setRemixLink(next);
    console.log("Remix link updated:", next);
  };

  const handleClick = (index) => {
    if (board[index] || hasPlayerPlayed || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setIsXNext(!isXNext);
      setHasPlayerPlayed(true);
    }
  };

  const remixTurn = () => {
    console.log("Remix button clicked");
    console.log("Current remix link:", remixLink);
    console.log("New dynamically created page:", remixLink);
    setHasPlayerPlayed(false);
  };

  const renderSquare = (index) => (
    <button
      className="w-20 h-20 border border-gray-400 text-4xl font-bold"
      onClick={() => handleClick(index)}
      disabled={hasPlayerPlayed || winner}
    >
      {board[index]}
    </button>
  );

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const getGameStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (hasPlayerPlayed) {
      return "Waiting for other player to remix...";
    } else {
      return `Current turn: ${isXNext ? 'X' : 'O'}`;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">
        {getGameStatus()}
      </h1>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(index => renderSquare(index))}
      </div>
      <Button 
        variant="destructive"
        onClick={remixTurn}
        className="mt-4"
        disabled={winner}
      >
        Remix for other player's turn
      </Button>
      <p className="text-2xl font-bold mt-8">
        Please publish it for the next turn
      </p>
    </div>
  );
};

export default TicTacToe;