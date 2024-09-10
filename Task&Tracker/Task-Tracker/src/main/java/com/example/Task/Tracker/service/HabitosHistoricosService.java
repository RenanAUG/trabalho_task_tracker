package com.example.Task.Tracker.service;

import com.example.Task.Tracker.model.Habitos;
import com.example.Task.Tracker.model.HabitosHistoricos;
import com.example.Task.Tracker.repository.HabitoHistoricoRepository;
import com.example.Task.Tracker.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HabitosHistoricosService {

    @Autowired
    private HabitoHistoricoRepository habitoHistoricoRepository;

    public HabitosHistoricos save(HabitosHistoricos habitosHistoricos) {
        return this.habitoHistoricoRepository.save(habitosHistoricos);
    }
}
