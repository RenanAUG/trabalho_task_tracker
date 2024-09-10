package com.example.Task.Tracker.service;

import com.example.Task.Tracker.model.Habitos;
import com.example.Task.Tracker.model.Tarefas;
import com.example.Task.Tracker.repository.TarefasRepository;
import com.example.Task.Tracker.repository.UsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TarefasService {

    @Autowired
    private TarefasRepository tarefasRepository;

    public List<Tarefas> getTarefasByUsuarioId(Long usuarioId) {
        return tarefasRepository.findByUsuarioId(usuarioId);
    }

    public Tarefas save(Tarefas tarefas) {
        return this.tarefasRepository.save(tarefas);
    }

    @Transactional
    public void concluirTarefa(Long idTarefa) {
        tarefasRepository.concluiTarefa(idTarefa);
    }
}
