#!/bin/bash
cd /home/kavia/workspace/code-generation/web-tic-tac-toe-1647-1656/tic_tac_toe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

