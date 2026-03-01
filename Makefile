.PHONY: frontend-install backend-install database-install install \
        frontend-start backend-start frontend-stop backend-stop \
        frontend-restart backend-restart frontend-logs backend-logs

frontend-install:
	cd frontend && npm install

backend-install:
	cd backend && npm install

database-install:
	cd database && npm install

install: frontend-install backend-install database-install


frontend-start:
	cd frontend && nohup npm run build > logs/frontend-build.log 2>&1 && \
	nohup npx serve -s dist -l 3000 > logs/frontend.log 2>&1 </dev/null & \
	echo $$! > .frontend.pid

backend-start:
	cd backend && nohup npm run start > logs/backend.log 2>&1 </dev/null & \
	echo $$! > .backend.pid


frontend-stop:
	@if [ -f .frontend.pid ]; then \
		kill $$(cat .frontend.pid) 2>/dev/null || true; \
		rm -f .frontend.pid; \
		echo "Frontend stopped"; \
	else \
		echo "Frontend not running"; \
	fi

backend-stop:
	@if [ -f .backend.pid ]; then \
		kill $$(cat .backend.pid) 2>/dev/null || true; \
		rm -f .backend.pid; \
		echo "Backend stopped"; \
	else \
		echo "Backend not running"; \
	fi

frontend-restart: frontend-stop frontend-start
backend-restart: backend-stop backend-start

frontend-logs:
	@tail -f logs/frontend.log

backend-logs:
	@tail -f logs/backend.log

status:
	@echo "=== Frontend ===" && \
	if [ -f .frontend.pid ]; then \
		if ps -p $$(cat .frontend.pid) > /dev/null 2>&1; then \
			echo "Running (PID: $$(cat .frontend.pid))"; \
		else \
			echo "PID file exists but process not running"; \
		fi; \
	else \
		echo "Not running"; \
	fi && \
	echo "" && \
	echo "=== Backend ===" && \
	if [ -f .backend.pid ]; then \
		if ps -p $$(cat .backend.pid) > /dev/null 2>&1; then \
			echo "Running (PID: $$(cat .backend.pid))"; \
		else \
			echo "PID file exists but process not running"; \
		fi; \
	else \
		echo "Not running"; \
	fi

stop: frontend-stop backend-stop
