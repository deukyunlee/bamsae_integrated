import React, { Component } from 'react';

export default function Toast({ msg = "�޼��� ����" }) {
    return <div className="toast">{msg}</div>;
  }