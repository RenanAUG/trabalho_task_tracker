package com.example.Task.Tracker.service;

import com.example.Task.Tracker.model.Habitos;
import com.example.Task.Tracker.model.Tarefas;
import com.example.Task.Tracker.repository.HabitosRepository;
import com.example.Task.Tracker.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HabitosService {

    @Autowired
    private HabitosRepository habitosRepository;

    public List<Habitos> getHabitosByUsuarioId(Integer usuarioId) {
        return habitosRepository.findByUsuarioId(usuarioId);
    }

    public Habitos save(Habitos habitos) {
        return this.habitosRepository.save(habitos);
    }
}
