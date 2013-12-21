<form action="10-upload.php" method="POST" enctype="multipart/form-data">
    <input type="text" name="<?php echo ini_get("session.upload_progress.name"); ?>" value="my_files">
    <input type="file" name="file">
    <input type="submit" value="send">
</form>
