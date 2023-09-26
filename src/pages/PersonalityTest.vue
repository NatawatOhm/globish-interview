<template>
  <div>
    <h1>Q1</h1>
    <h2>ถ้าวันนี้เป็นวันหยุด คุณจะ...</h2>
    <div class="choices">
      <div class="choice">
        <input type="radio" id="choice_1" name="answer" value="1" />
        <label for="choice_1">นอนเล่น พักผ่อน</label>
      </div>
      <div class="choice">
        <input type="radio" id="choice_2" name="answer" value="2" />
        <label for="choice_2">ดูหนัง ดูซีรี่ส์ เล่นเกม</label>
      </div>
      <div class="choice">
        <input type="radio" id="choice_3" name="answer" value="3" />
        <label for="choice_3">เรียนรู้อะไรใหม่ ๆ</label>
      </div>
    </div>
    <div>
      <button type="submit">กลับ</button>
      <button type="submit">ต่อไป</button>
    </div>
  </div>
</template>
