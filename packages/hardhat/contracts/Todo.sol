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
