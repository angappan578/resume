<script>
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'resume.pdf';   // file name in GitHub
    link.download = 'Angappan_Baskaran_Resume.pdf';
    link.click();
}
</script>