# ================================
# 🚀 PERSIST STATE COMMANDS
# ================================

# Start Anvil with state dumping (saves state when stopped)
# This command starts a fresh Anvil instance that will save its state to state.json when stopped
persist-state-dump:
	@echo "🔄 Starting Anvil with state persistence..."
	@echo "💾 State will be saved to state.json when you stop Anvil (Ctrl+C)"
	anvil --dump-state state.json

# Start Anvil and load previous state (if exists)
# This command loads a previously saved state from state.json
persist-state-load:
	@if [ -f "state.json" ]; then \
		echo "📂 Loading previous state from state.json..."; \
		anvil --load-state state.json --dump-state state.json; \
	else \
		echo "📝 No previous state found (state.json), starting fresh with state persistence..."; \
		anvil --dump-state state.json; \
	fi

# Clean state file
persist-state-clean:
	@if [ -f "state.json" ]; then \
		echo "🧹 Removing state.json..."; \
		rm state.json; \
		echo "✅ State file cleaned"; \
	else \
		echo "📝 No state file found to clean"; \
	fi

# Show state file info
persist-state-info:
	@if [ -f "state.json" ]; then \
		echo "📄 State file information:"; \
		ls -lh state.json; \
		echo "📊 File size: $$(du -h state.json | cut -f1)"; \
	else \
		echo "📝 No state file found"; \
	fi

# ================================
# 🚀 DEPLOYMENT COMMANDS
# ================================

# Deploy to local Anvil (requires anvil to be running)
deploy-local:
	forge script script/DeployBankSystem.s.sol:DeployBankSystem \
		--fork-url $(ANVIL_RPC_URL) \
		--private-key $(ANVIL_PRIVATE_KEY) \
		--broadcast

# Deploy to local Anvil with verification
deploy-local-verify:
	forge script script/DeployBankSystem.s.sol:DeployBankSystem \
		--fork-url $(ANVIL_RPC_URL) \
		--private-key $(ANVIL_PRIVATE_KEY) \
		--broadcast \
		--verify

# Deploy to Sepolia testnet (requires SEPOLIA_RPC_URL and PRIVATE_KEY env vars)
deploy-sepolia:
	@if [ -z "$(SEPOLIA_RPC_URL)" ] || [ -z "$(PRIVATE_KEY)" ]; then \
		echo "❌ Error: SEPOLIA_RPC_URL and PRIVATE_KEY environment variables must be set"; \
		echo "📝 Example: export SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY"; \
		echo "📝 Example: export PRIVATE_KEY=0x..."; \
		exit 1; \
	fi
	forge script script/DeployBankSystem.s.sol:DeployBankSystem \
		--fork-url $(SEPOLIA_RPC_URL) \
		--private-key $(PRIVATE_KEY) \
		--broadcast \
		--verify \
		--etherscan-api-key $(ETHERSCAN_API_KEY)

help:
	@echo "Available commands:"
	@echo "  make persist-state-dump       # Start Anvil with state persistence"
	@echo "  make persist-state-load       # Load previous state from state.json"
	@echo "  make persist-state-clean      # Clean state.json file"
	@echo "  make persist-state-info       # Show state.json file info"
	@echo "  make deploy-local             # Deploy to local Anvil"
	@echo "  make deploy-local-verify      # Deploy to local Anvil with verification"
	@echo "  make deploy-sepolia           # Deploy to Sepolia testnet"
	@echo "  make help                     # Show this help message"

.DEFAULT_GOAL := help

.PHONY: persist-state-dump persist-state-load persist-state-clean persist-state-info deploy-local deploy-local-verify deploy-sepolia help