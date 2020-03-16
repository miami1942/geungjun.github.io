<?php
  $conn = mysqli_connect("localhost", "root", "wkdgmd7093");
  mysqli_select_db($conn,"website");
  $result = mysqli_query($conn, "SELECT * FROM web_info");
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>
      <?php echo file_get_contents('txt/title_write.txt'); ?>
    </title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body id="target" class="">
    <div class="body_class">
    <!--********헤더*********-->
    <header>
      <h1 class="logo">
        <?php echo file_get_contents('txt/header_write.txt'); ?>
      </h1>
      <a href="index.php">
        <img id="main_img" src="images/main_image.png"
             width="300" height="150">
      </a>
    </header>
    <!--******전체 본문******-->
    <div class="container">
      <!--******리스트******-->
      <aside>
        <ul>
        <?php
          //echo file_get_contents('txt/list.txt');
          while ($row = mysqli_fetch_assoc($result)) {
            echo '<li><a href="index.php?id='.htmlspecialchars($row['id']).'">'
            .htmlspecialchars($row['title']).'</a></li>'."\n";
          }
        ?>
        <br><br><br><br><br><br><br><br><br><br><br><br>
      </ul>
      </aside>
      <!--******메인******-->
      <section>
        <!--******검색******-->
      <div>
        <div class="write_button">
          <a href="write.php">
            <input type="button" value="새 글쓰기" id="write"/>
          </a>
        </div>
        <form id="m_search" action="php/main.php">
          페이지 이동(테스트)
          <input type="text" name="page_num">
          <input type="submit" name="submit" value="이동">
        </form>
      </div>
        <!--******내용******-->
        <article>
          <?php
          //  if(empty($val)==false){
          //    echo file_get_contents("txt_info/".$_GET['id'].".txt");
          //  }
          //  if (empty($_GET['id'])==false) {
          //    echo file_get_contents("game_txt/".$_GET['id'].".txt");
          //  }
          if(empty($_GET['id'])===false){
            //$sql = 'SELECT * FROM web_info WHERE id='.$_GET['id'];
            $order_id = $_GET['id'];
            $sql = "SELECT *
            FROM web_info LEFT JOIN user
            ON web_info.author = user.id
            WHERE web_info.id=".$_GET['id'];
            $result = mysqli_query($conn, $sql);
            $row = mysqli_fetch_assoc($result);

            echo "<div class='title_text'>".strip_tags($row['title'],'<br/><br>')."</div>";
            echo "<div class='main_text'>".strip_tags($row['description'],'<br/><br>')."</div>";
            echo "<div class='name_text'>작성자 : ".strip_tags($row['name'],'<br/><br>')."<br/>
            작성 날짜 : ".strip_tags($row['created'],'<br/><br>')."<br /></div>";
            echo "<div class='id_text'>페이지번호 : ".strip_tags($order_id,'<br/><br>')."</div>";

            echo "
            <div class='u_d_button'>
            <a href='update.php?id=".htmlspecialchars($order_id)."'>
              <input type='button' id='db_update' value='수정'>
            </a>
            <form class='d_button' action='php/delete_process.php' method='post'>
              <input type='submit' id='db_delete' value='삭제'>
              <input type='hidden' name='id' value=".htmlspecialchars($order_id).">
            </form>
            </div>";
          }//type='submit'은 form으로 전송하는것이다. button은 전송이안된다.
          else {
            echo file_get_contents('txt/main_write.txt');
          }
          ?>
        </article>
      </section>
    </div>
    <!--******풋터******-->
    <footer>
      <?php
        echo file_get_contents('txt/footer.txt');
      ?>
    </footer>
    <!--js파일은 특정한 위치에 있어야 작동함-->
    <script src="js/test_button.js"></script>
    <!--이 위치로 test_button.js의 코드를 넣는다-->
  </div>
  </body>
</html>
