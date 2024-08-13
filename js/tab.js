document.querySelectorAll('.tab-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-item').forEach(tab => tab.classList.remove('active'));
        // Add active class to the clicked tab
        this.classList.add('active');

        // Hide all tab panels
        document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
        // Show the selected tab panel
        const targetPanel = document.getElementById(this.dataset.tab);
        targetPanel.classList.add('active');
    });
});
