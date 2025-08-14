document.addEventListener('DOMContentLoaded', function () {

    const assetListContainer = document.querySelector('.asset-list');

    if (assetListContainer) {
        assetListContainer.addEventListener('click', function (event) {
            const button = event.target.closest('button[data-action]');
            
            if (!button) {
                return; // Click was not on a button
            }

            const action = button.dataset.action;
            const assetCard = button.closest('.asset-card');
            const assetId = assetCard.dataset.assetId;
            const assetActionsContainer = assetCard.querySelector('.asset-actions');
            const assetName = assetCard.querySelector('h4').textContent;

            if (action === 'accept') {
                // Real-world scenario: Send a request to the server to confirm.
                console.log(`Accepted Asset ID: ${assetId} (${assetName})`);
                
                // Update UI
                const today = new Date();
                const formattedDate = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
                assetActionsContainer.innerHTML = `
                    <p class="status-confirmed">
                        <i class="fa-solid fa-check-circle"></i> Accepted on ${formattedDate}
                    </p>
                `;
                assetCard.classList.add('accepted');

            } else if (action === 'clarify') {
                // Ask for clarification reason
                const reason = prompt(`Please specify your question or issue regarding the asset "${assetName}":`);

                if (reason) {
                    // Real-world scenario: Send the reason to an admin/manager.
                    console.log(`Clarification needed for Asset ID: ${assetId}. Reason: ${reason}`);
                    alert("Your request for clarification has been sent to the IT department.");
                    
                    // Update UI
                    assetActionsContainer.innerHTML = `
                        <p class="status-pending">
                            <i class="fa-solid fa-hourglass-half"></i> Pending Clarification
                        </p>
                    `;
                    assetCard.classList.add('pending');
                }
            }
        });
    }

});
