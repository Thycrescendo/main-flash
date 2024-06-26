//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Todo {
    struct Task {
        uint id;
        uint date;
        string content;
        string author;
        bool done;
        uint dateComplete;
    }

    mapping(uint => Task) public tasks;
    uint public nextTaskId;

    event TaskCreted (
        uint id,
        uint date,
        string content,
        string author,
        bool done
    );

    event TaskStatusToggled (
        uint id,
        bool done,
        uint dateComplete
    );
function createTask(
        string memory _content,
        string memory _author)
        external {
            tasks[nextTaskId] = Task(nextTaskId, block.timestamp, _content, _author, false, 0);
            emit TaskCreted(nextTaskId, block.timestamp, _content, _author, false);
            nextTaskId++;
    }

    function getTasks() external view returns(Task[] memory){
        Task[] memory _tasks = new Task[](nextTaskId);
        for(uint i = 0; i < nextTaskId; i++) {
            _tasks[i] = tasks[i];
        }
        return _tasks;
    }

    function toggleDone(uint id) external {
        require(tasks[id].date != 0, 'task does not exist');
        Task storage task = tasks[id];
        task.done = !task.done;
        task.dateComplete = task.done ? block.timestamp : 0;
        emit TaskStatusToggled(id, task.done, task.dateComplete);
    }
}
